<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <div><input type="button" value="Add new row" @click="() => spreadsheet.insertRow()" /></div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['Jazz', 'Honda', '2019-02-12', '', '', true],
  ['Civic', 'Honda', '2018-07-11', '', '', true]
]
var options = {
  data: data,
  allowToolbar: true,
  columns: [
    { type: 'numeric', title: 'NRP', width: '250px' },
    { type: 'text', title: 'Nama Mahasiswa', width: '120px' },
    { type: 'calendar', title: 'Tanggal Lahir', width: '250px' },
    { type: 'image', title: 'Photo', width: '120px' },
    { type: 'checkbox', title: 'Status', width: '120px' }
  ]
}
export default {
  name: 'App',
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options)
    Object.assign(this, { spreadsheet })
  }
}
</script>
