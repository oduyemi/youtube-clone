import { Input, IconButton, Flex, Box, Avatar } from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-lg">
      <div className="logo text-2xl font-bold text-red-600">YouTube</div>

      <Flex alignItems="center" width="full" maxWidth="600px">
        <Input
          placeholder="Search"
          bg="gray.100"
          border="1px solid"
          borderColor="gray.300"
          height="40px"
          borderRadius="full"
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          ml={2}
          height="40px"
          width="60px"
          colorScheme="gray"
          borderRadius="full"
        />
      </Flex>

      <Flex alignItems="center" justifyContent="flex-end" className="space-x-4">
        <IconButton
          aria-label="Notifications"
          icon={<BellIcon />}
          variant="ghost"
          colorScheme="gray"
          size="lg"
        />
        <Avatar name="User" src="https://via.placeholder.com/40" />
      </Flex>
    </header>
  );
};
