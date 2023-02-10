import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3Config = {
	bucketName: process.env.bucket_name,
	region: "us-east-2",
	accessKeyId: process.env.accessKeyId,
	secretAccessKey: process.env.secretAccessKey,
};

const s3 = new S3Client(s3Config);

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.bucket_name,
		acl: "public-read",
		key: function (req, file, cb) {
			cb(null, Date.now().toString() + "." + file.originalname.split(".").pop());
		},
	}),
});

export { upload };
