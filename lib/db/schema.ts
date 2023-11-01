import { AdapterAccount } from '@auth/core/adapters';
import { relations } from 'drizzle-orm';
import {
  date,
  index,
  int,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  serial,
  text,
  timestamp,
  tinyint,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';

export const accounts = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 256 }).notNull(),
    type: varchar('type', { length: 256 })
      .$type<AdapterAccount['type']>()
      .notNull(),
    provider: varchar('provider', { length: 256 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 256 }).notNull(),
    token_type: varchar('token_type', { length: 256 }),
    access_token: varchar('access_token', { length: 256 }),
    refresh_token: varchar('refresh_token', { length: 256 }),
    expires_at: int('expires_at'),
    id_token: text('id_token'),
    scope: varchar('scope', { length: 256 }),
    session_state: varchar('session_state', { length: 256 }),
  },
  t => ({
    compoundKey: primaryKey(t.provider, t.providerAccountId),
  })
);

export const accountRelations = relations(accounts, ({ one }) => ({
  // 1 account <-> 1 user
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

// session table
export const sessions = mysqlTable('session', {
  sessionToken: varchar('sessionToken', { length: 256 }).primaryKey(),
  userId: varchar('userId', { length: 256 }).notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

// session relations
export const sessionRelations = relations(sessions, ({ one }) => ({
  // 1 session <-> 1 user
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 256 }).notNull(),
    token: varchar('token', { length: 256 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  t => ({
    compoundKey: primaryKey(t.identifier, t.token),
  })
);

export const genderEnum: [string, string, string] = [
  'male',
  'female',
  'prefer hidden',
];

export const users = mysqlTable(
  'user',
  {
    id: varchar('id', { length: 256 }).notNull(),
    uid: serial('uid').primaryKey(),
    name: varchar('name', { length: 30 }).notNull(),
    email: varchar('email', { length: 256 }).unique().notNull(),
    password: varchar('password', { length: 256 }),
    emailVerified: timestamp('emailVerified', {
      mode: 'date',
      fsp: 3,
    }).defaultNow(),
    birthday: date('birthday'),
    phone: varchar('phone', { length: 10 }),
    gender: mysqlEnum('gender', genderEnum),
    image: text('image'),
    created_at: timestamp('created_at', { mode: 'date', fsp: 0 }).defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date', fsp: 0 }).onUpdateNow(),
  },
  t => ({
    // uid: uniqueIndex('uid').on(t.uid),
    email_idx: uniqueIndex('user_email_idx').on(t.email),
  })
);

export const userRelations = relations(users, ({ one, many }) => ({
  // 1 user <-> 1 account
  account: one(accounts, { fields: [users.id], references: [accounts.userId] }),

  // 1 user <-> 1 address
  address: one(addresses, {
    fields: [users.id],
    references: [addresses.userId],
  }),

  // 1 user <-> n questions
  questions: many(questions),
}));

export const addresses = mysqlTable('address', {
  id: serial('id').primaryKey(),
  country: varchar('country', { length: 10 }),
  state: varchar('state', { length: 15 }),
  city: varchar('city', { length: 15 }),
  userId: int('userId'),
});

export const addressRelations = relations(addresses, ({ one }) => ({
  // 1 address <-> 1 user
  user: one(users, { fields: [addresses.userId], references: [users.uid] }),
}));

export const questionStatus: [string, string, string] = [
  'right',
  'wrong',
  'unsolved',
];

export const questions = mysqlTable(
  'question',
  {
    id: serial('id').primaryKey(),
    category: varchar('category', { length: 15 }).notNull(),
    description: text('description'),
    status: mysqlEnum('status', questionStatus).default('unsolved'),
    answer: tinyint('answer'),
    userId: int('userId'),
  },
  t => ({
    categoryIndex: index('categoryIndex').on(t.category),
    statusIndex: index('statusIndex').on(t.status),
  })
);

export const questionRelations = relations(questions, ({ one }) => ({
  // n question <-> 1 user
  user: one(users, { fields: [questions.userId], references: [users.uid] }),

  // 1 question <-> 1 questionOptions(1 row)
  questionOptions: one(questionOptions, {
    fields: [questions.id],
    references: [questionOptions.qid],
  }),
}));

export const questionOptions = mysqlTable('questionOptions', {
  id: serial('id').primaryKey(),
  option1: text('option1'),
  option2: text('option2'),
  option3: text('option3'),
  option4: text('option4'),
  option5: text('option5'),
  qid: int('qustionId'),
});

export const questionOptionRelations = relations(
  questionOptions,
  ({ one }) => ({
    // 1 questionOptions(1 row) <-> 1 question
    question: one(questions, {
      fields: [questionOptions.qid],
      references: [questions.id],
    }),
  })
);
