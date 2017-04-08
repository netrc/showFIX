// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

const stdFields = [
  { where: "Header", field: "SendingTime" },
  { where: "Header", field: "SenderCompID" },
  { where: "Header", field: "SenderSubID" },
  { where: "Header", field: "TargetCompID" },
  { where: "Header", field: "TargetSubID" },
  { where: "Header", field: "MsgType"}
];

var getFieldValuesArray = function gfva ( fm ) {
  let fvArray = [];
  stdFields.forEach( function(wf) {
    fvArray.push( {field: wf.field, value: fm[wf.where][wf.field] } );
  });
  return fvArray;
};

$(function() {
  console.log('hello world :o');
  
  var app = new Vue({
  el: '#ShowFixApp',
  data: { 
    fixMlist: [],

    fieldList: []
  },
    
  methods: {
    addFixM: function ( pm ) {
      pm.senderSub = pm.Header.SenderCompID;
      pm.targetSub = pm.Header.TargetCompID;
      pm.time = pm.Header.SendingTime;
      this.fixMlist.push(pm);
    },
    showDetail: function( fm ) {
      this.fieldList = getFieldValuesArray( fm );
    }
  }
})

const fix42test_1 = "8=FIX.4.29=035=849=JWEK56=BNJM34=350=515757=585052=20150406-12:17:2711=d3e3f1b3-da8a-4310-884e-9abc3cc0980b37=acd163dd-232d-4bc5-9dcb-9f484a0462c341=1aa523a8-2533-4c96-97ac-f717b358773b109=71191076=71191017=b7969f8e-56d3-40c8-b2dc-75322b76ec1a20=039=21=JWEK84930046155=HCBK48=46428843022=154=238=8030040=159=032=8030031=48.14100030=O29=114=803006=280.9975=20150406-12:17:2760=20150406-12:17:27150=2151=0207=P10=0";
const fix42test_2 = "8=FIX.4.29=15335=D49=BLP56=SCHB34=150=3073797=Y52=20000809-20:20:5011=900010081=1003000321=255=TESTA54=138=400040=259=044=3047=I60=20000809-18:20:3210=061";
app.addFixM( parse(fix42test_1) );
app.addFixM( parse(fix42test_2) );

});
