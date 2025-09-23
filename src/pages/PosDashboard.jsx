import {
  Card,
  CardBody,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";

const PosDashboardPage = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default PosDashboardPage;
