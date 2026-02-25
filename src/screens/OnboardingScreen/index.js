import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const COLORS = {
  pageBg: "#F7F9FA",
  heroBg: "#E9EEF2",
  primary: "#585AD1",
  line: "#D1D5DB",
  google: "#EA4335",
  chipBg: "#E9EEF2",
  text: "#1F2937",
  muted: "#9DA3A9",
};

const OnboardingScreen = ({ navigation }) => {
  const [currentView, setCurrentView] = useState("login"); // login | signup | setup

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  // setup
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male"); // male | female

  const isLogin = currentView === "login";
  const isSignup = currentView === "signup";
  const isSetup = currentView === "setup";

  const Divider = () => (
    <View className="flex-row items-center my-8">
      <View
        className="flex-1 h-[1px]"
        style={{ backgroundColor: COLORS.line }}
      />
      <Text className="mx-3 text-gray-400">Or continue with</Text>
      <View
        className="flex-1 h-[1px]"
        style={{ backgroundColor: COLORS.line }}
      />
    </View>
  );

  const GoogleButton = () => (
    <View className="items-center">
      <TouchableOpacity
        activeOpacity={0.85}
        className="w-14 h-14 rounded-full items-center justify-center"
        style={{ backgroundColor: COLORS.google }}
        onPress={() => {}}
      >
        <Text className="text-white font-bold text-lg">G</Text>
      </TouchableOpacity>
    </View>
  );

  // actions (hook these to API later)
  const handleLogin = () => navigation.navigate("MainTabs");
  const handleContinue = () => setCurrentView("setup");
  const handleFinish = () => navigation.navigate("MainTabs");

  return (
    <View className="flex-1" style={{ backgroundColor: COLORS.pageBg }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 48 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* ===== LOGIN HERO (only on login screen) ===== */}
        {isLogin && (
          <View
            className="w-full items-center justify-center"
            style={{ height: 300, backgroundColor: COLORS.heroBg }}
          >
            {/* Placeholder logo */}
            <View
              className="w-12 h-12 rounded-lg items-center justify-center mb-4"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Text className="text-white font-bold">▢</Text>
            </View>

            <Text
              className="text-[34px] font-extrabold"
              style={{ color: "#5A63E6" }}
            >
              Body & Beyond
            </Text>
            <Text
              className="text-[22px] font-semibold -mt-1"
              style={{ color: "#5A63E6" }}
            >
              AI Mentor
            </Text>
          </View>
        )}

        {/* ===== CONTENT ===== */}
        <View className="px-6" style={{ paddingTop: isLogin ? 28 : 64 }}>
          {/* ===== LOGIN ===== */}
          {isLogin && (
            <>
              <Text
                className="text-[34px] font-semibold text-center mb-7"
                style={{ color: COLORS.text }}
              >
                Welcome!
              </Text>

              <TextInput
                label=""
                placeholder="Email Address"
                isPassword={false}
                value={email}
                onChangeText={setEmail}
              />

              <TouchableOpacity className="items-end mt-2" onPress={() => {}}>
                <Text
                  className="font-semibold"
                  style={{ color: COLORS.primary }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>

              <View className="mt-4">
                <TextInput
                  label=""
                  placeholder="Password"
                  isPassword={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View className="mt-6">
                <Button
                  title="Login"
                  variant="primary"
                  onPress={handleLogin}
                  className="rounded-[28px] py-5"
                />
              </View>

              <Divider />
              <GoogleButton />

              <View className="flex-row justify-center mt-8">
                <Text className="text-gray-400">Don’t have an account? </Text>
                <TouchableOpacity onPress={() => setCurrentView("signup")}>
                  <Text
                    className="font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* ===== SIGN UP ===== */}
          {isSignup && (
            <>
              <Text
                className="text-[34px] font-semibold text-center mb-12"
                style={{ color: COLORS.text }}
              >
                Create an Account
              </Text>

              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Username
              </Text>
              <TextInput
                label=""
                placeholder="bbamtest"
                isPassword={false}
                value={username}
                onChangeText={setUsername}
              />

              <View className="mt-6" />
              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Email Address
              </Text>
              <TextInput
                label=""
                placeholder="name@email.com"
                isPassword={false}
                value={email}
                onChangeText={setEmail}
              />

              <View className="mt-6" />
              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Password
              </Text>
              <TextInput
                label=""
                placeholder="Create a password"
                isPassword={true}
                value={password}
                onChangeText={setPassword}
              />

              <View className="mt-4">
                <TextInput
                  label=""
                  placeholder="Confirm password"
                  isPassword={true}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>

              {/* Checkbox row */}
              <TouchableOpacity
                className="flex-row items-center mt-6"
                activeOpacity={0.85}
                onPress={() => setAcceptedPolicy((v) => !v)}
              >
                <View
                  className="w-8 h-8 rounded-lg border-2"
                  style={{
                    borderColor: acceptedPolicy ? COLORS.primary : COLORS.muted,
                    backgroundColor: acceptedPolicy
                      ? COLORS.primary
                      : "transparent",
                  }}
                />
                <Text
                  className="ml-4 text-[16px]"
                  style={{ color: COLORS.text }}
                >
                  By continuing, you agree to our{" "}
                  <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </TouchableOpacity>

              <View className="mt-10">
                <Button
                  title="Continue"
                  variant="primary"
                  onPress={handleContinue}
                  className="rounded-[28px] py-5"
                />
              </View>

              <Divider />
              <GoogleButton />

              <View className="flex-row justify-center mt-8">
                <Text className="text-gray-400">Already have an account? </Text>
                <TouchableOpacity onPress={() => setCurrentView("login")}>
                  <Text
                    className="font-semibold"
                    style={{ color: COLORS.primary }}
                  >
                    Log in
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* ===== SETUP ===== */}
          {isSetup && (
            <>
              <TouchableOpacity
                onPress={() => setCurrentView("signup")}
                className="flex-row items-center mb-12"
              >
                <Text
                  className="text-[28px] mr-2"
                  style={{ color: COLORS.primary }}
                >
                  ‹
                </Text>
                <Text className="text-[20px]" style={{ color: COLORS.text }}>
                  Back
                </Text>
              </TouchableOpacity>

              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.9}
                className="text-[34px] font-semibold mb-10"
                style={{ color: COLORS.text }}
              >
                Set Up Your Account
              </Text>

              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Age
              </Text>
              <TextInput
                label=""
                placeholder="21"
                isPassword={false}
                value={age}
                onChangeText={setAge}
              />

              <View className="mt-6" />
              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Weight
              </Text>
              <TextInput
                label=""
                placeholder=""
                isPassword={false}
                value={weight}
                onChangeText={setWeight}
              />

              <View className="mt-6" />
              <Text
                className="text-[18px] font-semibold mb-2"
                style={{ color: COLORS.text }}
              >
                Height
              </Text>
              <TextInput
                label=""
                placeholder=""
                isPassword={false}
                value={height}
                onChangeText={setHeight}
              />

              <View className="mt-8" />
              <Text
                className="text-[18px] font-semibold mb-4"
                style={{ color: COLORS.text }}
              >
                Gender
              </Text>

              <View className="flex-row">
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => setGender("male")}
                  className="flex-1 py-3.5 rounded-2xl items-center mr-3"
                  style={{
                    backgroundColor:
                      gender === "male" ? COLORS.primary : COLORS.chipBg,
                  }}
                >
                  <Text
                    className="text-[18px] font-semibold"
                    style={{
                      color: gender === "male" ? "#fff" : COLORS.primary,
                    }}
                  >
                    Male
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => setGender("female")}
                  className="flex-1 py-3.5 rounded-2xl items-center"
                  style={{
                    backgroundColor:
                      gender === "female" ? COLORS.primary : COLORS.chipBg,
                  }}
                >
                  <Text
                    className="text-[18px] font-semibold"
                    style={{
                      color: gender === "female" ? "#fff" : COLORS.primary,
                    }}
                  >
                    Female
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-12">
                <Button
                  title="Sign Up"
                  variant="primary"
                  onPress={handleFinish}
                  className="rounded-[28px] py-5"
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

export default OnboardingScreen;
