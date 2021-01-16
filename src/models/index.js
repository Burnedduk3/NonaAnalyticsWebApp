// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Form, FormQuestion, Question, Category, SubSection, Section } = initSchema(schema);

export {
  Form,
  FormQuestion,
  Question,
  Category,
  SubSection,
  Section
};