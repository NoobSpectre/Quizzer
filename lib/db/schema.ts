import { AdapterAccount } from '@auth/core/adapters';
import { relations } from 'drizzle-orm';
import {
  date,
  index,
  int,
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
  'accounts',
  {
    id: serial('id').primaryKey(),
    userId: varchar('userId', { length: 256 })
      .notNull()
      .references(() => users.id),
    type: varchar('type', { length: 256 })
      .$type<AdapterAccount['type']>()
      .notNull(),
    provider: varchar('provider', { length: 256 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 256 }).notNull(),
    access_token: varchar('access_token', { length: 256 }),
    expires_in: int('expires_in'),
    id_token: varchar('id_token', { length: 256 }),
    refresh_token: varchar('refresh_token', { length: 256 }),
    refresh_token_expires_in: int('refresh_token_expires_in'),
    scope: varchar('scope', { length: 256 }),
    token_type: varchar('token_type', { length: 256 }),
    session_state: varchar('session_state', { length: 256 }),
  },
  t => ({
    providerAccountIdIndex: uniqueIndex('accounts_providerAccountId_idx').on(
      t.provider,
      t.providerAccountId
    ),
    userIdIndex: index('accounts_userId_idx').on(t.userId),
  })
);

export const accountRelations = relations(accounts, ({ one }) => ({
  // 1 account <-> 1 user
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = mysqlTable(
  'sessions',
  {
    id: serial('id').primaryKey(),
    sessionToken: varchar('sessionToken', { length: 256 }),
    userId: varchar('userId', { length: 256 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  t => ({
    sessionTokenIndex: uniqueIndex('sessions_sessionToken_idx').on(
      t.sessionToken
    ),
    userIdIndex: index('sessions_userId_idx').on(t.userId),
  })
);

export const sessionRelations = relations(sessions, ({ one }) => ({
  // 1 session <-> 1 user
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = mysqlTable(
  'verificationTokens',
  {
    id: serial('id'),
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  t => ({
    compoundKey: primaryKey(t.identifier, t.token),
    tokenIndex: uniqueIndex('verification_tokens__token__idx').on(t.token),
  })
);

const genderEnum: [string, string, string] = ['male', 'female', 'unpreferred'];

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  fullname: varchar('fullname', { length: 30 }).notNull(),
  email: varchar('email', { length: 20 }).unique().notNull(),
  birthday: date('birthday'),
  gender: varchar('gender', { length: 12, enum: genderEnum }),
  image: text('image'),
  createdAt: timestamp('created_at', { mode: 'date', fsp: 0 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date', fsp: 0 })
    .defaultNow()
    .onUpdateNow(),
});

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

export const addresses = mysqlTable('addresses', {
  id: serial('id').primaryKey(),
  country: varchar('country', { length: 10 }),
  state: varchar('state', { length: 15 }),
  city: varchar('city', { length: 15 }),
  userId: int('userId'),
});

export const addressRelations = relations(addresses, ({ one }) => ({
  // 1 address <-> 1 user
  user: one(users, { fields: [addresses.userId], references: [users.id] }),
}));

const questionStatus: [string, string] = ['right', 'wrong'];
// const questionAnswer: [number, number, number, number, number] = [
//   1, 2, 3, 4, 5,
// ];

export const questions = mysqlTable(
  'questions',
  {
    id: serial('id').primaryKey(),
    category: varchar('category', { length: 15 }).notNull(),
    description: text('description'),
    status: varchar('status', { length: 5, enum: questionStatus }),
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
  user: one(users, { fields: [questions.userId], references: [users.id] }),

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
