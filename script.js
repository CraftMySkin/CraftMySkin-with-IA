
document.addEventListener("DOMContentLoaded", () => {
  const emeraldDisplay = document.getElementById("emeraldCount");
  const shopMessage = document.getElementById("shopMessage");
  const lastClaimInfo = document.getElementById("lastClaimInfo");
  const chestGrid = document.getElementById("chestGrid");
  const chestResult = document.getElementById("chestResult");

  const emeralds = () => parseInt(localStorage.getItem("emeralds") || "0");
  const updateEmeralds = (amount) => {
    localStorage.setItem("emeralds", amount.toString());
    emeraldDisplay.textContent = amount;
  };

  const loadEmeralds = () => {
    emeraldDisplay.textContent = emeralds();
  };

  const getLastClaim = () => parseInt(localStorage.getItem("lastClaim") || "0");
  const setLastClaim = (timestamp) => localStorage.setItem("lastClaim", timestamp.toString());

  window.claimReward = () => {
    const now = Date.now();
    const last = getLastClaim();
    if (now - last >= 86400000) {
      const newTotal = emeralds() + 5;
      updateEmeralds(newTotal);
      setLastClaim(now);
      lastClaimInfo.textContent = "Reward claimed!";
    } else {
      const hoursLeft = Math.ceil((86400000 - (now - last)) / 3600000);
      lastClaimInfo.textContent = `Come back in ${hoursLeft} hour(s) to claim again.`;
    }
  };

  // Cofre 3x3
  let chestOpened = false;
  const rewards = ["+10 emeralds", "+0", "VIP?", "+5", "Nothing", "+3", "Discord?", "+7", "+1"];

  const openChest = (index) => {
    if (chestOpened) return;
    const reward = rewards[index];
    chestResult.textContent = "You got: " + reward;
    if (reward.includes("+")) {
      const value = parseInt(reward.replace("+", "").split(" ")[0]);
      updateEmeralds(emeralds() + value);
    }
    chestOpened = true;
    setTimeout(() => {
      chestResult.textContent = "";
      chestGrid.innerHTML = "";
      generateChests();
      chestOpened = false;
    }, 3000);
  };

  const generateChests = () => {
    chestGrid.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const btn = document.createElement("button");
      btn.textContent = "?";
      btn.onclick = () => openChest(i);
      chestGrid.appendChild(btn);
    }
  };

  window.buyDiscord = () => {
    if (emeralds() >= 10) {
      updateEmeralds(emeralds() - 10);
      shopMessage.innerHTML = 'Discord link: <a href="https://discord.gg/WnFV9uZb" target="_blank">Join now</a>';
    } else {
      shopMessage.textContent = "Not enough emeralds for Discord.";
    }
  };

  window.buyVIP = () => {
    if (emeralds() >= 100) {
      updateEmeralds(emeralds() - 100);
      shopMessage.textContent = "VIP access granted!";
    } else {
      shopMessage.textContent = "Not enough emeralds for VIP.";
    }
  };

  // Init
  loadEmeralds();
  generateChests();
});
