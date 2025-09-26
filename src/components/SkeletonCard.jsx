import { Card, CardBody, Skeleton } from "@chakra-ui/react"

const SkeletonCard = () => {
    return(
        <Card rounded={"lg"} className="frozen-card" p={4}>
            <CardBody>
                <Skeleton height="20px" mb={4} />
                <Skeleton height="20px" mb={4} />
                <Skeleton height="20px" mb={4} />
            </CardBody>
        </Card>
    )
}
export default SkeletonCard;