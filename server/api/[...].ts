import * as videoController from "../controller/video";

const router = createRouter();

router.get("/videos", defineEventHandler(videoController.index));
router.get("/videos/:id", defineEventHandler(videoController.show));
router.post("/videos", defineEventHandler(videoController.store));
router.put("/videos/:id", defineEventHandler(videoController.update));
router.delete("/videos/:id", defineEventHandler(videoController.destroy));

export default useBase("/api/v1", router.handler);
