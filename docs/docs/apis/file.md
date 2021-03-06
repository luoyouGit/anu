# 文件

## getFileInfo(Object object) [快应用不支持]

获取文件信息

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| filePath      | string        |        | 是       | 本地文件路径                           |
| digestAlgorithm     | string |    'md5'    | 否      | 摘要算法，支持md5和sha1                                 |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数**

| 属性     | 类型          | 说明                                             |
| -------- | ------------- |------------------------------------------------ |
| size     | number         | 文件大小，以字节为单位                          |
| digest     | string  | 按照传入的 digestAlgorithm 计算得出的的文件摘要                                |

## getSavedFileInfo(Object object)

获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| filePath      | string        |        | 是       | 本地文件路径                           |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数**

| 属性     | 类型          | 说明                            |                 |
| -------- | ------------- |--------------------------------|---------------- |
| size     | number         | 文件大小，以字节为单位                          |都支持|
| createTime     | number| 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数           |都支持                     |
| errMsg     | String| 接口调用结果                                |微信|
## getSavedFileList(Object object)
获取该小程序下已保存的本地缓存文件列表

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数**

| 属性     | 类型          | 说明                                             |
| -------- | ------------- |------------------------------------------------ |
| fileList     | Array.Object         | 文件数组，每一项是一个 FileItem                          |


**res.fileList 的结构**

| 属性     | 类型          | 说明                                             |
| -------- | ------------- |------------------------------------------------ |
| filePath     | string         |本地路径                         |
| size     | number         |本地文件大小，以字节为单位                        |
| createTime    | number         |文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数  |


## removeSavedFile(Object object)

删除本地缓存文件

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| filePath      | string        |        | 是       | 本地文件路径                           |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

## saveFile(Object object)

保存文件到本地

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| tempFilePath      | string        |        | 是       | 需要保存的文件的临时路径                       |
| destinationFilePath      | string        |        | 是       | 目标文件的uri, 快应用必须                      |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数**

| 属性     | 类型          | 说明                                             |
| -------- | ------------- |------------------------------------------------ |
| savedFilePath     | string         | 文件数组，每一项是一个 FileItem                          |