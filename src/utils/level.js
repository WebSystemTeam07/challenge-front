const level = {
    levelIcon :function (userLevel) {
        switch (userLevel) {
          case 0:
            return "🐢 "//🐥🌱🌳🌴🍁❄️ㄹ"
          case 1:
            return "🥉 "// 브론즈"
          case 2:
            return "🥈 "// 실버"
          case 3: 
            return "🥇 " // 골드"
          case 4:
            return "💎 "// 다이아"
          case 5 :
            return "🪐 "
        }
      },
      levelName :function (userLevel) {
        switch (userLevel) {
          case 0:
            return "스타터"//🐥🌱🌳🌴🍁❄️ㄹ"
          case 1:
            return "브론즈"// 브론즈"
          case 2:
            return "실버"// 실버"
          case 3:
            return "골드" // 골드"
          case 4:
            return "다이아"// 다이아"
          case 5 :
            return "마스터"
        }
      }
}

module.exports = level;