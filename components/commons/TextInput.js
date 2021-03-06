import FormItem from 'antd/lib/form/FormItem'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'

export default ({ placeholder, icon, name, label, value, size, type, onChange, onBlur, error, message, style }) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: label ? 6 : 0 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: label ? 18 : 24 }
    }
  }

  return (
    <FormItem {...formItemLayout} label={label} validateStatus={error ? 'error' : 'success'} help={error && message} hasFeedback={error}>
      <Input
        id={name}
        type={type}
        size={size}
        name={name}
        value={value}
        prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
      />
    </FormItem>
  )
}
