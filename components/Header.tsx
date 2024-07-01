import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <Flex p="2rem " direction="column" alignItems="center">
                <Heading as="h1" size="4x1" noOfLines={1} className="tasklist-title" />
                TASKLIST.IO

            </Flex>
            <Text mt="1rem" className="taskList-slogan"> TaskList est un outil cree pour vous simplifier la vie</Text>
        </>
    )
}

export default Header