import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

export const GameCradSkeleton = () => {
  return (
    <Card>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
