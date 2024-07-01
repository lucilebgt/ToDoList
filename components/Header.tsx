import { Flex, Heading, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <Flex p="2rem " direction="column" alignItems="center">
                <Heading as="h1" noOfLines={1} className="tasklist-title">
                    TASKLIST.IO
                </Heading>
            </Flex>
            <Text mt="1rem" className="taskList-slogan" textAlign='center' colorScheme="#a50707"> TaskList est un outil cree pour vous simplifier la vie</Text>
        </>
    )
}

export default Header