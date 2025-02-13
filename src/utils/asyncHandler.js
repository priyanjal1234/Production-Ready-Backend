function asyncHandler(requestHandler) {
    (req,res,next) => {
        Promise.resolve(requestHandler()).catch(err => next(err))
    }
}

export default asyncHandler

// function asyncHandler(fn) {
//     async (req,res,next) => {
//         try {
            
//         } catch (error) {
//             res.status(err.code).json({
//                 success: false,
//                 message: err.message
//             })
//         }
//     }
// }