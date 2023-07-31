import Template from "../../shared/Template";
import { chefsPageCopy } from "../../src/copies";

const ChefsPage = () => {
  const {title, description, benefits} = chefsPageCopy;

  return <Template title={title}
    description={description}
    benefits={benefits}
  />}

export default ChefsPage; 
