import fmtEvent from '../_util/fmtEvent';

Component({
  props: {
    value: '',
    checked: false,
    disabled: false,
    onChange: () => {},
  },
  methods: {
    onChange(e) {
      const event = fmtEvent(this.props, e);
      this.props.onChange(event);
    },
  },
});
