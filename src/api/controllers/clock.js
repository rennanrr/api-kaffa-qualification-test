import Axios from "axios";

class TodoCtrl {
    async serverDate (req, res) {
        let dateTime = new Date(Date.now()).toISOString();
        res.status(200).json({currentDateTime: dateTime});
    }
    async externalDate (req, res) {
      const WorldTimeApi = Axios.create({
        baseURL: "http://worldtimeapi.org/api/"
      });
      await WorldTimeApi.get(`/ip`)
        .then((resApi) => {
          res.status(200).json({currentDateTime: resApi.data.utc_datetime});
      });
  }
}
export default new TodoCtrl();