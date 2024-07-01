import { Card, Flex, Text, Button } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { TaskProps } from '@/types';

const Task = ({ individualTask, handleCompletedTask, handleDeleteTask }: TaskProps) => {
    return (
        <Card p="2rem" mb="0.5rem" variant="outline">
            <Flex alignItems="center">
                {individualTask.completed ? (
                    <Text flexGrow="1" as="del">
                        {individualTask.task}
                    </Text>
                ) : (
                    <Text flexGrow="1">
                        {individualTask.task}
                    </Text>
                )}
                <Flex>
                    {individualTask.completed ? (
                        <Button isDisabled
                            ml="1rem"
                            color="whatsapp"
                        ><CheckIcon /></Button>
                    ) : (
                        <Button
                            ml="1rem"
                            color="whatsapp"
                            onClick={() => handleCompletedTask(individualTask._id)}
                        ><CheckIcon /></Button>
                    )
                    }
                    <Button
                        ml="1rem"
                        color="red"
                        onClick={() => handleDeleteTask(individualTask._id)}
                    ><DeleteIcon /></Button>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Task