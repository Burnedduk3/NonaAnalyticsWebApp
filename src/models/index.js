// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Form, FormQuestion, Question, Category, SubSection, Section } = initSchema(schema);

export {
  User,
  Form,
  FormQuestion,
  Question,
  Category,
  SubSection,
  Section
};