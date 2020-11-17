import React, { useContext } from "react"
import { FarmContext } from "../FarmProvider"
import AppContext from "../AppContext"
import { Box, SvgIcon, useMediaQuery } from "@material-ui/core"
import FarmCard from "./FarmCard"
import FarmInfoCard from "./FarmInfoCard"
import { formatADXPretty } from "../helpers/formatting"
import SectionHeader from "./SectionHeader"
import { useTranslation } from "react-i18next"
import { FARM_POOLS } from "../helpers/constants"

const Farm = () => {
	const { t } = useTranslation()
	const { farmStats } = useContext(FarmContext)
	const { chosenWalletType } = useContext(AppContext)
	const { pollStatsLoaded, userStatsLoaded, statsByPoolId } = farmStats

	const canStake = !!chosenWalletType.name && userStatsLoaded //&& !!appStats.connectedWalletAddress
	const justifyCenter = useMediaQuery(theme => theme.breakpoints.down("xs"))

	return (
		<Box>
			<SectionHeader title={t("common.farm")} actions={<></>} />
			<Box mt={4}>
				<Box
					display="flex"
					flex={1}
					flexDirection="row"
					flexWrap="wrap"
					alignItems="stretch"
					justifyContent={justifyCenter ? "center" : "flex-start"}
				>
					<FarmInfoCard />
					{FARM_POOLS.map(farm => {
						const stats = statsByPoolId ? statsByPoolId[farm.poolId] : null
						const poolMPY = pollStatsLoaded ? stats.poolMPY * 100 : null

						return (
							<FarmCard
								key={farm.token}
								id={farm.token}
								platformIcon={
									<SvgIcon fontSize="large" color="inherit">
										<farm.platformIcon width="99%" height="99%" />
									</SvgIcon>
								}
								assetsIcons={[
									farm.assetsIcons.map((Icon, i) => (
										<SvgIcon key={i} fontSize="large" color="inherit">
											<Icon width="99%" height="99%" />
										</SvgIcon>
									))
								]}
								name={farm.name}
								platform={farm.platform}
								depositAsset={farm.depositAssetName}
								getDepositAssetUrl={farm.getDepositAssetUrl}
								rewardAsset={farm.rewardAssetName}
								totalDepositTokenBalance={
									pollStatsLoaded
										? `${formatADXPretty(stats.totalSupply)} ${
												farm.depositAssetName
										  }`
										: t("farm.NA")
								}
								totalDepositTokenStaked={
									pollStatsLoaded
										? `${formatADXPretty(stats.totalStaked)} ${
												farm.depositAssetName
										  }`
										: t("farm.NA")
								}
								userStakedShare={
									userStatsLoaded
										? `${(stats.useShare * 100).toFixed(4)} %`
										: t("farm.NA")
								}
								currentMPY={
									pollStatsLoaded ? `${poolMPY.toFixed(2)} %` : t("farm.NA")
								}
								mpyInfo={[
									t("pools.currentDailyYield", {
										yield: pollStatsLoaded
											? (poolMPY / 30).toFixed(4) + " %"
											: t("farm.NA")
									})
								]}
								// currentAPY={
								// 	pollStatsLoaded ? `${poolAPY.toFixed(4)} %` : t("farm.NA")
								// }
								// weeklyYield={
								// 	pollStatsLoaded
								// 		? `${(poolAPY / (365 / 7)).toFixed(4)} %`
								// 		: t("farm.NA")
								// }
								// weeklyYieldInfo={[
								// 	t("pools.currentDailyYield", {
								// 		yield: pollStatsLoaded
								// 			? (poolAPY / 365).toFixed(4)
								// 			: t("farm.NA")
								// 	})
								// ]}
								onDepositBtnClick={() => {}}
								onWithdrawBtnClick={() => {}}
								loading={!pollStatsLoaded}
								disabled={!canStake}
								disabledInfo={t("pools.connectWalletToStake")}
								liquidityInfoText={t("farm.liquidityInfo")}
								liquidityStaked={
									userStatsLoaded
										? `${formatADXPretty(stats.userLPBalance)} ${farm.token}`
										: t("farm.NA")
								}
								liquidityOnWallet={
									userStatsLoaded
										? `${formatADXPretty(stats.walletBalance)} ${farm.token}`
										: t("farm.NA")
								}
								pendingADX={
									userStatsLoaded
										? `${formatADXPretty(stats.pendingADX)} ADX`
										: t("farm.NA")
								}
								pool={farm}
								stats={stats}
							/>
						)
					})}
				</Box>
			</Box>
		</Box>
	)
}

export default Farm
