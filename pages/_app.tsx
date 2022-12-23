import type { AppProps } from 'next/app'
import { ChakraProvider, Stack, Button, InputGroup, InputRightElement, Input, Text, Container } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'	
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Stack borderBottomWidth={1} borderBottomColor="gray.500" paddingY={2} direction="row" justifyContent="center">
        <Container maxWidth="container.xl">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={12}>
              <Button leftIcon={<HamburgerIcon width={6} height={6}/>} variant="link">Menu</Button>
              <InputGroup>
                <InputRightElement pointerEvents='none'>
                  <SearchIcon color='gray.300'/>
                </InputRightElement>
                <Input type='tel' placeholder='Buscar..' />
              </InputGroup>
            </Stack>
            <Text color="primary.500" fontFamily="sans" fontWeight="bold" fontSize="4xl" lineHeight="normal" textTransform="uppercase">LA NACION</Text>
            <Stack direction="row" justifyContent="flex-end">
              <Button colorScheme="primary">Suscribete</Button>
              <Button>Ingresar</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Component {...pageProps} />
      <Stack textDecoration="underline">
        <Text>Desafio Club La Nacion</Text>
      </Stack>
    </ChakraProvider>
  )
}
