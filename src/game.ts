import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../8186a12c-d2ef-4f9d-96b9-cc2dd87567d1/src/item"
import Script3 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script4 from "../LK-POAPBOOTH/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(0.9999999403953552, 2.5, 13),
  rotation: new Quaternion(2.933552499631868e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.1250044107437134)
})
externalLink2.addComponentOrReplace(transform3)

const youtubeButtonLink2 = new Entity('youtubeButtonLink2')
engine.addEntity(youtubeButtonLink2)
youtubeButtonLink2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 6, 10.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 1, 0.21093973517417908)
})
youtubeButtonLink2.addComponentOrReplace(transform4)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15, 6, 5),
  rotation: new Quaternion(-3.213962784798241e-8, 0.70710688829422, -9.919487098386526e-8, 0.7071067690849304),
  scale: new Vector3(1.0000035762786865, 0.9999999403953552, 0.12500044703483582)
})
externalLink3.addComponentOrReplace(transform5)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15, 6, 11.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 0.13000039756298065)
})
externalLink4.addComponentOrReplace(transform6)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15, 6, 4),
  rotation: new Quaternion(-9.93893107836027e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000003695487976, 1, 0.01999986544251442)
})
externalLink5.addComponentOrReplace(transform7)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(1, 5, 3),
  rotation: new Quaternion(1.5394203364713045e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(3.375, 3.375, 1)
})
nftPictureFrame.addComponentOrReplace(transform8)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(1, 5, 13),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000026226043701, 3, 1.0000040531158447)
})
nftPictureFrame2.addComponentOrReplace(transform9)

const poapBooth = new Entity('poapBooth')
engine.addEntity(poapBooth)
poapBooth.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(2.5, 7, 3),
  rotation: new Quaternion(-1.9581811436160954e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
poapBooth.addComponentOrReplace(transform10)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(externalLink2, {"url":"https://cointr.ee/synthianominae","name":"Synthia's Cointr.ee"}, createChannel(channelId, externalLink2, channelBus))
script2.spawn(youtubeButtonLink2, {"url":"https://www.youtube.com/channel/UCvmFF1a2t0oe0U6z9eLZyZw/featured","bnw":false,"name":"Raevyn's Channel"}, createChannel(channelId, youtubeButtonLink2, channelBus))
script1.spawn(externalLink3, {"url":"https://dragonate.info/links","name":"DragoNate's Links"}, createChannel(channelId, externalLink3, channelBus))
script1.spawn(externalLink4, {"url":"https://decentraspots.org/","name":"Guide to the best scenes in DCL"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(externalLink5, {"url":"measemedia.com/","name":"Mease's Website!"}, createChannel(channelId, externalLink5, channelBus))
script3.spawn(nftPictureFrame, {"id":"21046987814499655195708388996270636381407107141687107688498090892047538978817","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Minimal_Black","color":"#000000","ui":true,"uiText":"For Sale!"}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(nftPictureFrame2, {"id":"21046987814499655195708388996270636381407107141687107688498090895346073862145","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Minimal_Black","color":"#000000","ui":true,"uiText":""}, createChannel(channelId, nftPictureFrame2, channelBus))
script4.spawn(poapBooth, {"onClickText":"Get POAP"}, createChannel(channelId, poapBooth, channelBus))