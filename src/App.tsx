import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import TextArea from './components/TextArea'

function App() {
  const {
    toLanguage,
    fromLanguage,
    result,
    loading,
    fromText,
    setFromLanguage,
    setResult,
    setFromText,
    setToLanguage,
    interchangeLanguages
  } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              value={fromText}
              onChange={setFromText}
              type={SectionType.From}
              loading={loading}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => interchangeLanguages()}
          >
            Intercambiar
          </button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={toLanguage}
              type={SectionType.To}
              onChange={setToLanguage}
            />
            <TextArea
              value={result}
              onChange={setResult}
              loading={loading}
              type={SectionType.To}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
