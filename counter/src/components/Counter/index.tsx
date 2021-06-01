import React from 'react';
import {useStore} from "effector-react";
import {$counter, increment, resetCounter} from "./model";
import {Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";

const Counter = () => {
    const counter = useStore($counter)
    return (
        <Flex align='center' justify="center" mt="300px">
            <Box
                d="flex"
                w="300px"
                justifyContent="space-between"
                alignItems="center"
                borderWidth="1px"
                borderRadius="lg"
                p={10}
            >
                <Text fontSize="xl">{counter}</Text>
                <Box>
                    <Button
                        colorScheme="blue"
                        onClick={increment}
                    >Count</Button>
                    <Button
                        colorScheme="teal"
                        onClick={resetCounter}
                    >
                        Reset
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
};

export default Counter;
