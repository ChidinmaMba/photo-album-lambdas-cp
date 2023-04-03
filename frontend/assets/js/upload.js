// import uuidv4 from "uuid/v4";
// String(uuidv4()) 

const region =  "us-east-1"
// const accessKey = process.env.AWS_ACCESS_KEY_ID
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const accessKey = "AKIAVVW52467NMTARVMM"
const secretAccessKey = "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"

async function uploadPhoto(labels, photo) {
    // params, body, additionalParams
    var params =  {
        'Content-Type': 'text/base64',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Accept': 'text/base64',
        'x-amz-meta-customLabels':labels,
        'key': uid()
    }
    return sdk.uploadPut(params, {photo}, {});
}