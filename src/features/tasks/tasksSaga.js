import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona!");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
