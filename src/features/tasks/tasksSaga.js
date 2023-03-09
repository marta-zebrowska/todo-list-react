import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona!");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
