import { Grid, Stack, Text, Image, Container, LinkOverlay, LinkBox, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import type { GetStaticProps, NextPage } from "next"
import api, {Article, Tag} from "../articles/api";


type Props = {
  articles: Article[],
  tags: Tag[],
}

export const getStaticProps: GetStaticProps = async () => {
  const {articles, tags} = await api.list();
  return {
    props: {
      articles,
      tags,
    }
  }
}

const HomePage: NextPage<Props> = ({articles, tags}) => {
  console.log(articles)
  return (
    <Container maxWidth="container.xl" padding={15}>
      <Stack>
        <Text fontSize="xx-large" textDecoration="underline">Acumulado Grilla</Text>
        <Breadcrumb separator='·'>
          {
            tags.map((tag) => (
              <BreadcrumbItem key={tag.slug}>
                <BreadcrumbLink color="primary.500" href='#'>{tag.text}</BreadcrumbLink>
              </BreadcrumbItem>
            ))
          }
        </Breadcrumb>
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
          {articles.map((article) => (
            <LinkBox key={article._id}>
              <Stack fontFamily="Arial">
                <Image _hover={{
                  filter: 'brightness(110%)',
                }} 
                width="300px"
                src={article.promo_items?.basic?.url!} 
                alt={article.headlines.basic}
                transition="all .2s ease-in-out"
                />
                <Stack spacing={1}>
                  <Stack display="flex">
                    <Text as={LinkOverlay} href={article.website_url} fontWeight="bold" fontSize="lg">{article.headlines.basic}</Text>
                    <Text fontSize="lg">{article.promo_items?.basic.subtitle}</Text>
                  </Stack>
                  <Text fontSize="xs" color="gray.500">{article.display_date}</Text>
                </Stack>
              </Stack>
            </LinkBox>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default HomePage
