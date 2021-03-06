import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { text: 'Home', link: true },
  { text: 'Registration', link: true },
  { text: 'Personal Information', active: true },
]

const BreadcrumbDividerPropExample = () => (
  <Breadcrumb divider='/' sections={sections} />
)

export default BreadcrumbDividerPropExample
