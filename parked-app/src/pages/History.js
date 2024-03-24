import {Box, Button, Card, Heading, IconButton, Image, StackDivider, Text} from "@chakra-ui/react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import React from "react";
import logo from "../assets/parked_logo.svg";
import {DownloadIcon} from "@chakra-ui/icons";
import html2pdf from "html2pdf.js/src";

const handlePrintPDF = () => {
    // Select the element containing the content to be printed
    const element = document.getElementById("contentToPrint");

    // Configure the options for html2pdf
    const options = {
        filename: 'Parked_Transaction_History.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Call html2pdf and pass the element and options
    html2pdf().from(element).set(options).save();
};

const DATA = [
    {
        Record_Number: 1,
        Address: "123 Main St \nNashville, TN 39182",
        transaction_number: "18v9sbj2kj8",
        start_date:"05/24",
        end_date:"05/24",
        cost: 13.45
    },
    {
        Record_Number: 3,
        Address: "321 Elm St \nNashville, TN 39182",
        transaction_number: "83bv490c-49c",
        start_date:"04/24",
        end_date:"05/24",
        cost: 245.12
    }
];

const TransactionCard= ({ data}) => {
    return (
        <Card m='30' py='10' pl = '10%'>
            <CardHeader>
                <Heading size='lg' mb='10'>{data.Address}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Start Date
                        </Heading>
                        <Text pt='2' mb = '8'>
                            {data.start_date}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            End Date
                        </Heading>
                        <Text pt='2' mb = '8'>
                            {data.end_date}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Transaction Amount
                        </Heading>
                        <Text pt='2' mb = '8'>
                            ${data.cost}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Transaction ID
                        </Heading>
                        <Text pt='2'>
                            {data.transaction_number}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

const History = () => {
    return (<div >
            <Box display="flex"
                 justifyContent="center" py='2'
                 bg='tomato'>
                <Image objectFit={"contain"} src={logo} alt='logo' htmlWidth='20%'/>

            </Box>
            <div id="contentToPrint">


            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box><Heading m='15' p ='5' as='h2' size='3xl'>Transaction History</Heading></Box>
                <Box><IconButton
                    m='15' p ='5'
                    aria-label='Options'
                    icon={<DownloadIcon/>}
                    variant='outline'
                    size="lg"
                    onClick={handlePrintPDF}
                /></Box>
            </Box>
            {DATA.reverse().map((item) => (
                <TransactionCard key={item.Record_Number} data={item}/>
            ))}
            <Box display="flex"
                 justifyContent="center" my = '8vh' >
                <Button colorScheme="blue" onClick={() => {

                }}
                        p='8'>
                    Go Back to Dashboard
                </Button>
            </Box>
            </div>
        </div>
    );
};

export default History;