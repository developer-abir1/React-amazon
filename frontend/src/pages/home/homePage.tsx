import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'
import ProductItem from '../../components/ProductItem'
import { getError } from '../../utils'
import { ApiError } from '../../types/apiError'
import { useGetProductsQuery } from '../../hooks/productHooks'

const HomePages = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={12} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default HomePages
