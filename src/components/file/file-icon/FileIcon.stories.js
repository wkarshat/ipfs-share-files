import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import FileIcon from './FileIcon'

storiesOf('FileIcon', module)
  .addDecorator(checkA11y)
  .add('All', () => (
    <div className='ma3'>
      <FileIcon />
      <FileIcon name='audio' />
      <FileIcon name='video' />
      <FileIcon name='image' />
      <FileIcon name='text' />
      <FileIcon name='calc' />
      <FileIcon type='directory' />
    </div>
  ))
  .add('Default', () => (
    <div className='ma3'>
      <FileIcon />
    </div>
  ))
  .add('Audio', () => (
    <div className='ma3'>
      <FileIcon name='audio' />
    </div>
  ))
  .add('Video', () => (
    <div className='ma3'>
      <FileIcon name='video' />
    </div>
  ))
  .add('Image', () => (
    <div className='ma3'>
      <FileIcon name='image' />
    </div>
  ))
  .add('Text', () => (
    <div className='ma3'>
      <FileIcon name='text' />
    </div>
  ))
  .add('Calc', () => (
    <div className='ma3'>
      <FileIcon name='calc' />
    </div>
  ))
  .add('Folder', () => (
    <div className='ma3'>
      <FileIcon type='directory' />
    </div>
  ))
