const NotFoundError = require('../exceptions/NotFoundError');

class VideoService {
    constructor(videoModel) {
        this.Model = videoModel;
    }

    getThumbnails = async () => {
        try {
            const result = await this.Model.find().select('thumbnail title');
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    getVideos = async () => {
        try {
            const result = await this.Model.find();
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    getVideo = async (id) => {
        try {
            const result = await this.Model.findById(id);
            if (!result) {
                throw new Error();
            }
            return result;
        } catch (err) {
            throw new NotFoundError('Video not found');
        }
    };

    addVideo = async (video) => {
        try {
            const newVideo = new this.Model(video);
            const result = await newVideo.save();
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    deleteVideo = async (id) => {
        try {
            await this.Model.findByIdAndDelete(id);
        } catch (err) {
            throw new NotFoundError('Video not found');
        }
    };

    updateVideo = async (id, video) => {
        try {
            await this.Model.findByIdAndUpdate(id, video);
        } catch (err) {
            throw new Error(err.message);
        }
    };
}

module.exports = VideoService;
