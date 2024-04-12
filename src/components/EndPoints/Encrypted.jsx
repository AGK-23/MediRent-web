import CryptoJS from "crypto-js";
// export const key = process.env.REACT_APP_ENCRYPTION_KEY;
// export const IV = process.env.REACT_APP_ENCRYPTION_IV;
export const key = 'zVxF1PHvOJ3b9t7l'
export const IV = 'RQ8VAcEMo4Z|AU2I'
export const secretKey = CryptoJS.enc.Utf8.parse(key);
export const intiVector = CryptoJS.enc.Utf8.parse(IV);

// "AesSecretKey": "zVxF1PHvOJ3b9t7l",
// "AesIv": "RQ8VAcEMo4Z|AU2I",

export const encryptAes = (data) => {
    const preEncrypteds = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey, {
        iv: intiVector,
        mode: CryptoJS.mode.CBC,
        keySize: 128 / 8,
    });
    const result = preEncrypteds.toString(CryptoJS.format.Hex);
    return result;
};

export const deCryptedData = (data) => {
    console.log({ data })
    const dataHex = CryptoJS.enc.Hex.parse(data);
    const preDecrypted = CryptoJS.AES.decrypt(
        { ciphertext: dataHex },
        secretKey,
        { iv: intiVector, mode: CryptoJS.mode.CBC, keySize: 128 / 8 },
    );
    const encDecrypted = preDecrypted.toString(CryptoJS.enc.Utf8);

    let decrypted = encDecrypted;
    if (decrypted.includes("{")) {
        decrypted = JSON.parse(encDecrypted);
    }
    return decrypted;
};