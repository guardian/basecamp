import Template from "../../shared/Template";
import { personalisedPageCopy } from "../../src/copies";

const PersonalisedPage = () => {
  const {title, description, benefits} = personalisedPageCopy; 

  return <Template title={title}
    description={description}
    benefits={benefits}
  />
}


export default  PersonalisedPage;
