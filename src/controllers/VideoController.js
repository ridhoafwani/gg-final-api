const InvariantError = require('../exceptions/InvariantError');
const { validatePostVideo, validatePatchVideo } = require('../validator/videoValidator');

class VideoController {
    constructor(videoService) {
        this.service = videoService;
    }

    getThumbnails = async (req, res, next) => {
        try {
            const thumbnails = await this.service.getThumbnails();
            res.json(thumbnails);
        } catch (err) {
            next(err);
        }
    };

    getVideos = async (req, res, next) => {
        try {
            const videos = await this.service.getVideos();
            res.json(videos);
        } catch (err) {
            next(err);
        }
    };

    getVideoById = async (req, res, next) => {
        try {
            const video = await this.service.getVideo(req.params.id);
            res.json(video);
        } catch (err) {
            next(err);
        }
    };

    postVideo = async (req, res, next) => {
        try {
            const { error } = validatePostVideo(req.body);
            if (error) {
                throw new InvariantError(error.details[0].message);
            }
            const newVideo = await this.service.addVideo(req.body);
            res.status(201).json({
                message: 'Video added successfully',
                data: newVideo,
            });
        } catch (err) {
            next(err);
        }
    };

    deleteVideoById = async (req, res, next) => {
        try {
            await this.service.deleteVideo(req.params.id);
            res.json({
                message: 'Video deleted successfully',
            });
        } catch (err) {
            next(err);
        }
    };

    patchVideoById = async (req, res, next) => {
        try {
            const { error } = validatePatchVideo(req.body);
            if (error) {
                throw new InvariantError(error.details[0].message);
            }
            await this.service.updateVideo(req.params.id, req.body);
            res.json({
                message: 'Video updated successfully',
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = VideoController;
