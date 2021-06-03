import React from 'react';
import {Box, Flex, Input, Text} from "@chakra-ui/react";
import {useStore} from "effector-react";
import {$celsius, $fahrenheit, fahrenheitChange,celsiusChange} from "./model";

export const Converter = () => {
    const celsius = useStore($celsius)
    const fahrenheit = useStore($fahrenheit)
    return (
        <Flex w="lg">
            <Box>
                <Input value={celsius}
                 onChange={celsiusChange}
                />
                <Text>Celsius</Text>
            </Box>
            <Box>
                <Input value={fahrenheit} onChange={fahrenheitChange}/>
                <Text>Fahrenheit</Text>
            </Box>
        </Flex>
    );
};

