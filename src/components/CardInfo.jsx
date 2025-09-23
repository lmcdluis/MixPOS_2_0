import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

const CardInfo = ({title, value, percentage }) => {
  return (
        <Stat bg="white" p={4} variant="outline" rounded={"lg"} boxShadow={"md"}>
          <StatLabel fontSize={"md"}>{title || "Titulo"}</StatLabel>
          <StatNumber>{value || 0}</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            {percentage || 0} %
          </StatHelpText>
        </Stat>
  );
};
export default CardInfo;
