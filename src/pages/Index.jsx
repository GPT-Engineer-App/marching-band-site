import { Box, Container, Heading, VStack, Text, SimpleGrid, Image, Input, Textarea, Button } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Town High School Marching Band
        </Heading>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            About Us
          </Heading>
          <Text mt={4}>The Town High School Marching Band, established in 1985, has been a symbol of pride and excellence for our school. Comprising over 100 talented musicians, our band has won numerous awards at state and national competitions.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Gallery
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Image src="https://images.unsplash.com/photo-1633955803887-7a0d8a81ad8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwbWFyY2hpbmclMjBiYW5kfGVufDB8fHx8MTcxNDg2ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Marching Band 1" />
            <Image src="https://images.unsplash.com/photo-1484508005949-1293190f1c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJjaGluZyUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwwfHx8fDE3MTQ4Njg4OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Marching Band 2" />
            <Image src="https://images.unsplash.com/photo-1630885409152-7cabaa5fc19f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwaW5zdHJ1bWVudHMlMjBoaWdoJTIwc2Nob29sfGVufDB8fHx8MTcxNDg2ODg5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Marching Band 3" />
          </SimpleGrid>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="brand.800">
          <Heading as="h2" size="lg" color="white">
            Band Boosters
          </Heading>
          <Text mt={4} color="white">
            Join the Town High School Band Boosters to support our musicians! Your contributions help us fund new instruments, uniforms, and travel for competitions.
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="brand.900">
          <Heading as="h2" size="lg" color="white">
            Volunteer
          </Heading>
          <VStack spacing={5} mt={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="red">Submit</Button>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Contact Us
          </Heading>
          <VStack spacing={5} mt={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Find Us
          </Heading>
          <VStack spacing={3} mt={4} alignItems="flex-start">
            <Text>
              <FaMapMarkerAlt /> 123 Band Road, Musicville, ST 12345
            </Text>
            <Text>
              <FaPhone /> +1 (123) 456-7890
            </Text>
            <Text>
              <FaEnvelope /> contact@thsband.com
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
