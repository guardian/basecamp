import Template from "../../shared/Template";
import { vegetarianPageCopy } from "../../src/copies";

const VegetarianPage = () => {
  const { title, description, benefits } = vegetarianPageCopy;

  return <Template title={title}
    description={description}
    benefits={benefits}
  />
}

export default VegetarianPage; 
