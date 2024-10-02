import OpenAI from 'openai';
import { OpenAI_KEY } from './constansts';

const client = new OpenAI({
  apiKey: OpenAI_KEY,
 dangerouslyAllowBrowser: true ,
});


export default OpenAI;