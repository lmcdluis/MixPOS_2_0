import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Heading,
  IconButton,
  CardFooter,
  Button
} from "@chakra-ui/react";

const CardInfo = ({ title, value, percentage }) => {
  return (
    <Card rounded={"xl"} className="frozen-card" p={2}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="md">{title || "Titulo"}</Heading>
            </Box>
          </Flex>
          <IconButton
          className="icon-button-overlay-frozen"
          isRound={true}
            aria-label="Menu"
            icon={<i className="bi bi-box-seam"></i>}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flex={1} alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="2xl">{value || 0}</Heading>
          </Box>
        </Flex>
        <Button leftIcon={<i className="bi bi-search"></i>} colorScheme='teal' size='sm'>Ver detalles</Button>
      </CardBody>
    </Card>
  );
};
export default CardInfo;
