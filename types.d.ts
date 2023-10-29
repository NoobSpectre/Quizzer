type Tgender = 'male' | 'female' | 'prefer hidden';

type Taddress = {
  id?: number;
  country: string;
  state?: string;
  city?: string;
  userId?: number;
};

type Tuser = {
  id?: number;
  name?: string;
  email: string;
  birthday?: Date;
  gender?: Tgender;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
};

type TquestionOptions = {
  id?: number;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  qid?: number;
};

type TquestionStatus = 'right' | 'wrong' | 'unsolved';
type Tanswer = 1 | 2 | 3 | 4 | 5;

type Tquestion = {
  id?: number;
  category: string;
  description: string;
  status: TquestionStatus;
  answer: Tanswer;
  userId?: number;
};
