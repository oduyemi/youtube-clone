import { Flex, Box, Icon } from '@chakra-ui/react';
import { MdHome, MdStar, MdSubscriptions } from 'react-icons/md';


export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-6">
      <Flex direction="column" gap={6}>
        <Flex align="center" gap={4}>
          <Icon as={MdHome} boxSize={6} />
          <Box>Home</Box>
        </Flex>
        <Flex align="center" gap={4}>
          <Icon as={MdStar} boxSize={6} />
          <Box>Trending</Box>
        </Flex>
        <Flex align="center" gap={4}>
          <Icon as={MdSubscriptions} boxSize={6} />
          <Box>Subscriptions</Box>
        </Flex>
      </Flex>
    </aside>
  );
};

