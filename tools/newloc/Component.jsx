import RadioButton, { RadioGroup } from '@milostudio/components/radioButton';

const Component = ({name}) => {
  return (
      <RadioGroup
        value={name}
      >
        <RadioButton
          label='Published URLs (hlx.live)'
          value="1"
        />
        <RadioButton
          label='Previewed URLs (hlx.page)'
          value="2"
        />
      </RadioGroup>
  )
}
