import { Form } from 'react-bootstrap'
import React from 'react'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

const commonStyles = { height: '200px', border: 0 }
const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Introducir Texto'
  if (loading === true) return 'Cargando...'
  return 'Traduccion'
}

const TextArea: React.FC<Props> = ({ loading, type, value, onChange }) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}

export default TextArea
