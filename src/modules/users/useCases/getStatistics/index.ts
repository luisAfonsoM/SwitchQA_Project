import { GetStatisticsByDate } from "./GetStatisticsByDate";
import { GetStatisticsByDateController } from "./GetStatisticsByDateController";
import { userRepo } from "../../repos";

const getStatisticsByDate = new GetStatisticsByDate(userRepo);

const getStatisticsByDateController = new GetStatisticsByDateController(getStatisticsByDate,)

export {
    getStatisticsByDate,
    getStatisticsByDateController
};