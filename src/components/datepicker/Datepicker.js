import React, { useState ,useEffect} from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const datePicker = (props) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    setOpen(props.showDatepicker)
  },[]);

  const confirm = (selectedDate) => {
    setDate(selectedDate);
    props.datePicker(moment(selectedDate).format('DD-MMM-YYYY'));
  };

  const cancel = () => {
    setOpen(false);
    props.cancelDatePicker(false); 
  };

  return (
    <View>
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          confirm(date);
        }}
        onCancel={()=>cancel()}
        mode="date"
        onDateChange={confirm}
      />
    </View>
  )
}

export default datePicker;