import React from 'react'
import { Image, Grid, Rail, Segment } from 'semantic-ui-react'

const RailCloseExample = () => (
  <Grid columns={3}>
    <Grid.Column>
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Rail close position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail close position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailCloseExample
